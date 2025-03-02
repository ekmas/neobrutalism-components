/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA1RJREFUSEt1Vk1T2lAUPXEhC0LcUPtr6IwW3GiA8uFMpcwUWOEP0i6sdEZ0oeAAwS4KU2b03yguGl4WuCCde/OSvBB8GzLv3e977rloruu6eO/QiwbIH5aKffPFBgl5r7GD999DZVUmFlA0klDUheJgs9B0OkEm8wmJ7QS0rS3OgWJaLt/w+PSI3OcsZxkeileTVy60leu6/ruaLX1/KRYxHI7QajZwcfET2panuFq5aLYa6HR+IZ/PYzgcvltlL4O1Uy6X0ev1IISAYRhe7V0XmiYdKN//bBu6nkK1Ukav31cT4fJGHJCnSrmM+/t7pHQdpLy7+xGv8xdY4zGOjo7YgGVZME0T6XQaz8/PHAQFUyqX0O/1vZbKiscyoEgNYwdCLKCndFijEfb39pEyDNj2Ahpc+W1jNpvBzJsQCwFd12EvbFn7sCkRB8VCAVfXXehJPYiKFIXjUI08zHJ84HIlk0kIR7C8bducRb1ex2AwCPAcOCC0HOQOWD2d/oDbu1vkTZOVYif0w5Fb1gjH1WO8vM7Z8J/JRKJLQdFyuUS73Uan0wkipSgDDLBRxbKUgioDoNls4uzsjGFNCSswDcdjPB6jVqtxTdeNbsrGSBm4ubnB4eFh/NmfA03zhsg78UgjWJbZUMM38QzPikR/MMk0ROEhvPvKqjP1PhqG0n7WjTqQlv0iPTz8xsnJV0bGejZqDfy2GKkddK+7MOWchKyocNHy7Q2np21cXl4GNrx4yYUrWxHPzAOClAHQaDTw4/wc236TfaqYTqfI5XJsnCb07u6Op1UIJ9Kb0JkXhwdTC9VqFfP5nO8mkwmy2SzrRei6UCyie3XF3LJjpLAQ3oQ6jhPC1YeBBiSTNITKoDkC32p1DIeDsArhPgiKAYKdIwSScoj29vZ5sqknVHefNmazvzJLlSokWOJc5N1UKhX0+/0Y2Y1GFvMOHZoTIr6Q7DzuKpVKrKtSamQf+A8BXTsChBB/yVBD6fjUTd+UFZW0UilHjfsZbF443muhUABF3mh8Z3SpDlqtFt8V8gUMlJpzADG6Vrfl2u4ldGUyGSQSidDBygXB+unpUaJFnY61laku/Q27X52Z2D+MqFl/NUcj3Eh2XHNlca9t9WDuQ5k1KlA8/wdeJhLO52KsRQAAAABJRU5ErkJggg==)
 */
export default function Star34({
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
        d="M109.5 5h-19v47.24L72.422 8.596l-17.554 7.271 18.078 43.644-33.404-33.404-13.435 13.435 33.404 33.404-43.644-18.078-7.271 17.554L52.24 90.5H5v19h47.24L8.596 127.578l7.271 17.554 43.644-18.078-33.404 33.404 13.435 13.435 33.404-33.404-18.078 43.644 17.554 7.271L90.5 147.76V195h19v-47.24l18.078 43.644 17.554-7.271-18.078-43.644 33.404 33.404 13.435-13.435-33.404-33.404 43.644 18.078 7.271-17.554L147.76 109.5H195v-19h-47.24l43.644-18.078-7.271-17.554-43.644 18.078 33.404-33.404-13.435-13.435-33.404 33.404 18.078-43.644-17.554-7.271L109.5 52.24z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  )
}
