import React from "react";

const SvgLisaa: React.FC = () => {
  return (
    <svg width={413} height={128} viewBox="0 0 413 128">
      <defs>
        <pattern id="a" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 225 224">
          <image
            width={225}
            height={224}
            xlinkHref="data:image/png;base64,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"
          />
        </pattern>
        <pattern id="b" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 376 134">
          <image
            width={376}
            height={134}
            xlinkHref="data:image/png;base64,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"
          />
        </pattern>
      </defs>
      <g data-name="Groupe 258" transform="translate(-1104 -9913)">
        <path transform="translate(1104 9913)" fill="url(#a)" d="M0 0H128V128H0z" />
        <path transform="translate(1298 9939)" fill="url(#b)" d="M0 0H219V78H0z" />
      </g>
    </svg>
  );
};

export default SvgLisaa;