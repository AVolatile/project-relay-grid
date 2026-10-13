import { ProductProvider } from "@/components/product/provider";
import { AppShell } from "@/components/product/shell";
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductProvider>
      <AppShell>{children}</AppShell>
    </ProductProvider>
  );
}
