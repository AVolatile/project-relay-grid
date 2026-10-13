import { Suspense } from "react";
import { Builder } from "@/components/product/builder";
export const metadata = { title: "Workflow builder" };
export default function Page() {
  return (
    <Suspense
      fallback={
        <div
          className="skeleton-page"
          role="status"
          aria-label="Loading workflow"
        >
          <div />
          <div />
          <div />
        </div>
      }
    >
      <Builder />
    </Suspense>
  );
}
