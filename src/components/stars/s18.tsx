/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA7JJREFUSEudVj1ME2EYfq7YCkLC1QYUFdASCrrSoSwQO9DWAjLqQHQgDCRKZWJTBw0bx8JAWEhIGEX+2mrCIAMSddABSyraoBCQ1LYJaqmUM9971+tde6fGm7583/s978/zvO93nCiKIv7rEyGCA8duczKAvFZvcceiKOaM1Ad5n9rdIhvaMLIRITlQB6DvBdCJlK4Z2cuHGgfqqCl9AIlEElYrL5lTMeUTDtjf30dVVVWBF7l0hg4KIg2GgvD6fOQsm83StZKSEgINhcLwer0FDGq54fIkS8iZwwwsJy1K5kwDnz5+hN3egPThT7IpLS3F5uYm7HY7OC5XYCCTycBisagcFnCQO4lGo6ipqUFFRQVt+Xw+BJeCSCQTOAZg463weD0IhcOU2cHBAXZ2duBwOIr0qMpAfSYi8j6CZCoFl8tF0bLoysvLySidTlOZ7A0NWFt9Cd7Ko7m5WVfshg5YKSKRCGZmZvDg4UNUV1fh+bNnRHRHRwcR/OD+fdy4eZPAddRKDjUOvnz+jKdzc+js7ER9fT0ZMCe3b93CVbcblZWVRDQryfLyMqamppTIY7EYFhcX0d3djdraWiWbYpmKTB8iJicnMTIygoGBAbS3tcHV2krgrOacyYTV1VWsrKxgfHwcw8PD6Ovrk4Sd51yStNGoyKk1kUigt7eXosuHBfiv+TE9PQ2+kidQdYk0o0It03T6EOvr6wiHwwiHQvgUi+HECTNsp6149ea1hEKFBZwtTsTjcRz9OsLFSxfh8Xjg8/pw+coVlJWVKh1e1AcSQn5qvVh5QTI1m81IpVJ0yrjIZA4RDIbQ3tZeMIu0s0PFgXoUisgei2h1ufDo0WM0NTnQ399PxLLP7XZjYmKC5Mvqz/gwmUy6c0mTQW7+zM4+gcVswTW/nwBrzp3DzvY2enp6iMMnT2dx4Xwttre/0PnCwgKOs1l0X7/+p0YT8esoi3dv36KlpUWp1N3BOxgdFZBMJrG1tUX7dXV14HkeQ0NDGBPGFOWsra3B6XTKs0qmSz2uC93Hv8Xx4/sP0jWL0i9ntBRcIhWxvik7dQo2m01DnRrH4MGRJuL83Bw1DmMnEBjEmCCQhAKDAQhjbA3Mz8+jq6vL4LkwGHbs4sbGBpocTUr6giAgEAgQ6Kgwinu0lhog+iGKxsZGJfC8jjSNpn4oih+wvd1dnD17hkD3vu7hTDVbF3w6r5vuqFA6sxjCANT4ndWV6V8e2n9xq9j8uZPVUPKwyfWKqt/zVjo/Br8B0K7YwOaENQsAAAAASUVORK5CYII=)
 */
export default function Star18({
  color,
  size,
  stroke,
  strokeWidth,
  pathClassName,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  color?: string
  size?: number
  stroke?: string
  pathClassName?: string
  strokeWidth?: number
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size ?? width}
      height={size ?? height}
      {...props}
    >
      <path
        fill={color ?? "currentColor"}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={pathClassName}
        d="m100 5 3.757 72.678c.053 1.022 1.426 1.314 1.89.401l32.993-64.866-26.128 67.923c-.368.955.768 1.78 1.563 1.135l56.524-45.838-51.496 51.422c-.725.724-.023 1.94.966 1.674l70.281-18.886-67.959 26.032c-.956.366-.809 1.762.202 1.922l71.887 11.333-72.673-3.86c-1.022-.054-1.456 1.28-.597 1.838l61.062 39.592-64.819-33.085c-.912-.465-1.851.578-1.293 1.436l39.68 61.006-45.759-56.589c-.643-.797-1.926-.226-1.765.786l11.436 71.87-18.786-70.308c-.264-.989-1.668-.989-1.932 0l-18.786 70.308 11.436-71.87c.16-1.012-1.121-1.582-1.765-.786L44.16 176.857l39.68-61.006c.558-.858-.381-1.901-1.293-1.436L17.727 147.5l61.063-39.592c.859-.558.425-1.892-.598-1.838L5.52 109.93l71.887-11.333c1.011-.16 1.158-1.556.202-1.922L9.649 70.643 79.932 89.53c.989.266 1.69-.95.966-1.674L29.401 36.433 85.925 82.27c.795.645 1.93-.18 1.563-1.136L61.36 13.213 94.353 78.08c.464.913 1.837.621 1.89-.401z"
      />
    </svg>
  )
}
