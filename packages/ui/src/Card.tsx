"use client";

import styled from "styled-components";

const StyledCard = styled.div`
  color: yellow;
`;

// comment

export const Card = ({
  title,
  cta,
  href,
}: {
  title: string;
  cta: string;
  href: string;
}) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="ui-group ui-mt-4 ui-rounded-lg ui-border ui-border-transparent ui-overflow-hidden ui-bg-origin-border ui-bg-gradient-to-r ui-from-brandred ui-to-brandblue ui-text-[#6b7280]"
    >
      <StyledCard className="ui-p-4 ui-bg-zinc-900 ui-h-full ui-text-sm">
        <p className="ui-inline-block ui-text-xl ui-text-white">{title}</p>
        <div className="ui-text-xs ui-mt-4 group-hover:ui-underline">
          {cta} →
        </div>
      </StyledCard>
    </a>
  );
};
