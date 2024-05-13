export function useScrollTo(id: string) {
  const element = document.getElementById(id);
  element && element.scrollIntoView({ behavior: "smooth" });
}
