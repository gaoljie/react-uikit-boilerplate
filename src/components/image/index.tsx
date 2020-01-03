import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Box from "../box";

const prefix = "https://res.cloudinary.com/helloyumi/image/upload/q_70/";

export interface ImageProps {
  src: string;
  w?: number;
  h?: number;
  offset?: number;
  alt: string;
  lazyLoad?: boolean;
  overflow?: boolean;
  of?: "fill" | "contain" | "cover" | "none" | "scale-down";
  mode?:
    | "scale"
    | "limit"
    | "fill"
    | "fir"
    | "crop"
    | "thumb"
    | "pad"
    | "lfill"
    | "lpad"
    | "mfit"
    | "mpad";
}

const Image: React.FC<ImageProps> = props => {
  const {
    src,
    w,
    h,
    mode,
    offset = 200,
    lazyLoad = true,
    overflow = false
  } = props;

  const styledProp = { ...props };

  delete styledProp.overflow;

  const isGif = src.endsWith(".gif");

  const gifHandle = isGif ? "fl_lossy/" : "";

  let dimensionStr = "";
  if (w && h) dimensionStr = `w_${w},h_${h}`;

  if (w && !h) dimensionStr = `w_${w}`;

  if (h && !w) dimensionStr = `h_${h}`;

  if (mode) dimensionStr += `,c_${mode}`;

  dimensionStr = `${dimensionStr}/`;

  return lazyLoad ? (
    <LazyLoad
      offset={offset}
      overflow={overflow}
      placeholder={<Box {...props} />}
    >
      <StyledImage
        {...styledProp}
        src={`${prefix}${dimensionStr}${gifHandle}s3/${src}`}
        as="img"
      />
    </LazyLoad>
  ) : (
    <StyledImage
      {...styledProp}
      src={`${prefix}${dimensionStr}${gifHandle}s3/${src}`}
      as="img"
    />
  );
};

const StyledImage = styled(Box)<ImageProps>`
  ${({ of }) => of && `object-fit: ${of};`};
  ${({ xl, lg, md, sm }) => (xl || lg || md || sm) && `width: 100%;`};
`;

export default Image;
