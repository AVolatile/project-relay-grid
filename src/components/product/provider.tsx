"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import {
  workflows as initialWorkflows,
  approvals as initialApprovals,
  workflowTemplates,
  type Workflow,
  type Approval,
  type Step,
  type ApprovalStatus,
} from "@/lib/data";
import { Icon } from "../ui/icon";
type ProductContextType = {
  workflows: Workflow[];
  approvals: Approval[];
  workflowSteps: Record<string, Step[]>;
  updateSteps: (id: string, update: React.SetStateAction<Step[]>) => void;
  updateApproval: (id: string, status: ApprovalStatus, reason?: string) => void;
  setWorkflowStatus: (id: string, status: Workflow["status"]) => void;
  addWorkflow: (workflow: Workflow) => void;
  notify: (message: string) => void;
  reset: () => void;
};
const ProductContext = createContext<ProductContextType | null>(null);
export function ProductProvider({ children }: { children: ReactNode }) {
  const [workflows, setWorkflows] = useState(initialWorkflows);
  const [approvals, setApprovals] = useState(initialApprovals);
  const [workflowSteps, setWorkflowSteps] = useState(workflowTemplates);
  const [toast, setToast] = useState("");
  const notify = useCallback((message: string) => setToast(message), []);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 4500);
    return () => clearTimeout(timer);
  }, [toast]);
  const updateApproval = (
    id: string,
    status: ApprovalStatus,
    reason?: string,
  ) => {
    setApprovals((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              status,
              detail: reason
                ? `${a.detail}\nDecision note: ${reason}`
                : a.detail,
            }
          : a,
      ),
    );
    notify(`${id} ${status.toLowerCase()}. The queue has been updated.`);
  };
  const setWorkflowStatus = (id: string, status: Workflow["status"]) => {
    setWorkflows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, status, updated: "Just now" } : w,
      ),
    );
    notify(`Workflow ${status.toLowerCase()}.`);
  };
  const addWorkflow = (workflow: Workflow) => {
    setWorkflows((prev) => [workflow, ...prev]);
    setWorkflowSteps((prev) => ({
      ...prev,
      [workflow.id]: [
        {
          id: "request",
          title: "Request submitted",
          type: "Trigger",
          owner: "Requester",
          detail: "Start this workflow when a request is submitted.",
          enabled: true,
        },
      ],
    }));
    notify(`${workflow.name} created as a draft.`);
  };
  const updateSteps = (id: string, update: React.SetStateAction<Step[]>) =>
    setWorkflowSteps((prev) => ({
      ...prev,
      [id]: typeof update === "function" ? update(prev[id] || []) : update,
    }));
  const reset = () => {
    setWorkflows(initialWorkflows);
    setApprovals(initialApprovals);
    setWorkflowSteps(workflowTemplates);
    notify("Demo workspace reset to its original sample data.");
  };
  return (
    <ProductContext.Provider
      value={{
        workflows,
        approvals,
        workflowSteps,
        updateSteps,
        updateApproval,
        setWorkflowStatus,
        addWorkflow,
        notify,
        reset,
      }}
    >
      {children}
      <div
        className={`toast ${toast ? "toast-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast && (
          <>
            <Icon name="check" />
            <span>{toast}</span>
            <button
              aria-label="Dismiss notification"
              onClick={() => setToast("")}
            >
              <Icon name="x" size={16} />
            </button>
          </>
        )}
      </div>
    </ProductContext.Provider>
  );
}
export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) throw new Error("Product components require ProductProvider");
  return context;
}
