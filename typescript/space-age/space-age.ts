type Planet = "mercury" | "venus" | "earth" | "mars" | "jupiter" | "saturn" | "uranus" | "neptune";
export function age(planet: Planet, seconds: number): number {
	const ratio = {
		earth: 1.0,
		mercury: 0.2408467,
		venus: 0.61519726,
		mars: 1.8808158,
		jupiter: 11.862615,
		saturn: 29.447498,
		uranus: 84.016846,
		neptune: 164.79132
	};
	return Number((seconds / (ratio[planet] * 31_557_600)).toFixed(2));
}
