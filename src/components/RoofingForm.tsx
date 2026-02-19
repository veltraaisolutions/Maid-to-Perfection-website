"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { FORM_CONFIG } from "../data/questions";

type FormAnswers = Record<string, string | number | boolean | string[]>;

export default function RoofingForm() {
  const [currentStepId, setCurrentStepId] = useState<string>(
    FORM_CONFIG.initialStepId,
  );
  const [history, setHistory] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormAnswers>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const currentStep = FORM_CONFIG.allSteps[currentStepId];

  const getActiveFlow = () => {
    const service = formData["serviceType"] as string;
    return FORM_CONFIG.flows[service] || [];
  };

  const validateStep = () => {
    if (currentStep.type === "multiple-choice") {
      const selections = (formData[currentStep.id] as string[]) || [];
      if (selections.length === 0) {
        setError("Please select at least one option");
        return false;
      }
      return true;
    }

    if (currentStep.type === "choice") return true;

    const fields = currentStep.fields || [];
    for (const field of fields) {
      if (!String(formData[field.id] || "").trim()) {
        setError("Please fill in all fields");
        return false;
      }
    }
    setError(null);
    return true;
  };

  const handleNext = async (value?: string) => {
    const updatedData = { ...formData };
    if (value && currentStep.type === "choice") {
      updatedData[currentStep.id] = value;
    }
    setFormData(updatedData);

    if (!value && !validateStep()) return;

    let nextStepId = "";
    if (currentStepId === FORM_CONFIG.initialStepId) {
      const selectedService = value || (updatedData.serviceType as string);
      nextStepId = FORM_CONFIG.flows[selectedService][0];
    } else {
      const flow = getActiveFlow();
      const currentIndex = flow.indexOf(currentStepId);
      if (currentIndex < flow.length - 1) {
        nextStepId = flow[currentIndex + 1];
      } else {
        setIsCalculating(true);
        setTimeout(() => submitToN8N(updatedData), 1800);
        return;
      }
    }

    setHistory([...history, currentStepId]);
    setCurrentStepId(nextStepId);
    setError(null);
  };

  const handleBack = () => {
    const newHistory = [...history];
    const prevStepId = newHistory.pop();
    if (prevStepId) {
      setHistory(newHistory);
      setCurrentStepId(prevStepId);
    }
  };

  const toggleOption = (value: string) => {
    const current = (formData[currentStep.id] as string[]) || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setFormData((prev) => ({ ...prev, [currentStep.id]: updated }));
  };

  const submitToN8N = async (finalData: FormAnswers) => {
    console.log("🚀 Final Form Data:", finalData); // Response logged to console first
    setLoading(true);
    try {
      await fetch(FORM_CONFIG.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...finalData,
          source: "Cleaning Service Quote",
          timestamp: new Date().toISOString(),
        }),
      });

      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      setSubmitted(true);
    } catch (err) {
      alert("Submission error. Please check your connection.");
    } finally {
      setLoading(false);
      setIsCalculating(false);
    }
  };

  const activeFlow = getActiveFlow();
  const totalSteps = activeFlow.length + 1;
  const currentProgressIndex =
    currentStepId === FORM_CONFIG.initialStepId
      ? 1
      : activeFlow.indexOf(currentStepId) + 2;
  const progress = (currentProgressIndex / totalSteps) * 100;

  if (isCalculating)
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-brand"
        >
          <Sparkles size={60} />
        </motion.div>
        <h2 className="text-2xl font-bold mt-4">Analysing Requirements...</h2>
      </div>
    );

  if (submitted)
    return (
      <div className="text-center p-10 bg-card border rounded-[2.5rem] max-w-md mx-auto">
        <CheckCircle2
          size={60}
          className="mx-auto text-brand mb-4"
        />
        <h2 className="text-3xl font-black uppercase italic">Success!</h2>
        <p className="mt-4 text-muted-foreground">
          Thanks, {String(formData.fullName || "User")}! Our team will contact
          you shortly.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="w-full mt-8 py-4 bg-brand text-white rounded-xl font-bold uppercase tracking-widest"
        >
          Return
        </button>
      </div>
    );

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-black uppercase italic tracking-tighter mb-4">
          MAID TO <span className="text-brand">PERFECTION</span>
        </h1>
        <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${progress}%` }}
            className="h-full bg-brand"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStepId}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="bg-card border rounded-[2.5rem] p-8 md:p-10 shadow-2xl min-h-[480px] flex flex-col"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
            {currentStep.question}
          </h2>

          <div className="flex-grow flex flex-col justify-center">
            {(currentStep.type === "choice" ||
              currentStep.type === "multiple-choice") && (
              <div className="grid grid-cols-2 gap-4">
                {currentStep.options?.map((opt) => {
                  const isSelected =
                    currentStep.type === "multiple-choice"
                      ? ((formData[currentStep.id] as string[]) || []).includes(
                          opt.value,
                        )
                      : formData[currentStep.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() =>
                        currentStep.type === "multiple-choice"
                          ? toggleOption(opt.value)
                          : handleNext(opt.value)
                      }
                      className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all ${isSelected ? "border-brand bg-brand/10" : "bg-muted/40 border-transparent hover:border-brand/50"}`}
                    >
                      <opt.icon
                        className={`mb-3 ${isSelected ? "text-brand" : "text-muted-foreground"}`}
                        size={32}
                      />
                      <span className="font-bold text-xs uppercase text-center">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
                {currentStep.type === "multiple-choice" && (
                  <button
                    onClick={() => handleNext()}
                    className="col-span-2 mt-4 h-14 bg-brand text-white font-black rounded-xl uppercase tracking-widest"
                  >
                    Continue
                  </button>
                )}
              </div>
            )}

            {(currentStep.type === "text" || currentStep.type === "phone") && (
              <div className="space-y-4 max-w-sm mx-auto w-full">
                {currentStep.fields?.map((f) => (
                  <input
                    key={f.id}
                    type="text"
                    placeholder={f.placeholder}
                    className="w-full h-14 px-6 bg-muted/50 border-2 border-border rounded-xl focus:border-brand focus:outline-none"
                    value={(formData[f.id] as string) || ""}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, [f.id]: e.target.value }))
                    }
                  />
                ))}
                {error && (
                  <p className="text-brand text-xs font-bold text-center uppercase">
                    {error}
                  </p>
                )}
                <button
                  onClick={() => handleNext()}
                  className="w-full h-14 bg-brand text-white font-black rounded-xl flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                  {currentProgressIndex === totalSteps
                    ? "GET QUOTE"
                    : "CONTINUE"}{" "}
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-between items-center pt-6 border-t border-border/50">
            {history.length > 0 ? (
              <button
                onClick={handleBack}
                className="flex items-center text-muted-foreground hover:text-brand font-bold text-xs uppercase tracking-widest"
              >
                <ChevronLeft size={16} /> Back
              </button>
            ) : (
              <div />
            )}
            <span className="text-muted-foreground font-mono text-xs font-bold bg-muted px-3 py-1 rounded-md">
              {currentProgressIndex} / {totalSteps}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
