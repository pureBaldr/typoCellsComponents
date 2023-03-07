import { mixClass, textWeightMix, TextSizeType, ColorType, TextWeightType } from "@dadmor/pure-baldr-core";
import { Text } from "@dadmor/pure-baldr-typo-components";

type Props = {
  first?: string;
  firstSize?: TextSizeType;
  firstColor?: ColorType;
  secondSize?: TextSizeType;
  second?: string | Date;
  className?: string;
  truncate?: boolean;
  secondWeight?: TextWeightType;
}
export const TextCell: React.FC<Props> = ({
  first,
  second,
  className = "",
  firstSize = "xs",
  firstColor = null,
  secondSize = "sm",
  truncate = false,
  secondWeight = null,
}) => {
  return (
    <div
      className={mixClass({
        "flex flex-col": true,
        "gap-3": firstSize === "2xl",
        "gap-3.5": firstSize === "3xl",
        "gap-1": firstSize !== ("2xl" || "3xl"),
        [className]: true,
      })}
    >
      <Text
        size={firstSize}
        color={firstColor}
        className={mixClass({
          "font-bold": firstSize == ("lg" ||  "2xl" || "3xl"),
          truncate: truncate,
        })}
      >
        <>{first}</>
      </Text>

      <Text
        size={secondSize}
        className={mixClass({
          truncate: truncate,
          ...textWeightMix(secondWeight),
        })}
        color="gray"
      >
        <>{second}</>
      </Text>
    </div>
  );
};
export default TextCell;
