export const sizes = {
  mobile: 320,
  tablet: 768,
  laptop: 1024,
  desktop: 1920
}

export const devices = {
  mobile: `@media (min-width: ${sizes.mobile}px) and (max-width: ${sizes.tablet - 1}px)`,
  tablet: `@media (min-width: ${sizes.tablet}px) and (max-width: ${sizes.laptop - 1}px)`,
  laptop: `@media (min-width: ${sizes.laptop}px) and (max-width: ${sizes.desktop - 1}px)`,
  desktop: `@media (min-width: ${sizes.desktop}px)`,
};