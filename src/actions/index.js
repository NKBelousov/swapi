export const GO_TO_PLANETS = "GO_TO_PLANETS";
export function goToPlanets() {
  return {
    type: GO_TO_PLANETS,
    url: "/planets",
  };
}
export * from "~/actions/people";
