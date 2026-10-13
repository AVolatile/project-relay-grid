import { Logo } from "@/components/ui/brand";
import { ButtonLink } from "@/components/ui/primitives";
export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <Logo />
      <span className="eyebrow">404 / ROUTE NOT FOUND</span>
      <h1>This path ends here.</h1>
      <p>The page may have moved. Let’s get you back to the grid.</p>
      <ButtonLink href="/">Back to RelayGrid</ButtonLink>
    </main>
  );
}
