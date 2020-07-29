/** @jsx jsx */
import { jsx } from "theme-ui";
import c from "config";
import { useStoreActions } from 'easy-peasy';

import CardTitle from "./CardTitle";
import CardLink from "./CardLink";
import CardTags from "./CardTags";
import CardDescription from "./CardDescription";
import CardOpeningHours from "./CardOpeningHours";
import Toggle from 'components/Toggle';

export default (p) => {
  const { data } = p;
  if (data) {}
  const { properties } = data;
  const {autoid, isFaved} = properties;
  const setFav = useStoreActions((a) => a.setFav);
  return (
    <>
      {data && (
        <>
          {c.detail.map((block, i) => {
            switch (block.component) {
              case "title":
                return (
                  <>
                    <CardTitle key={`card-title-key-${i}`} size="responsive">
                      {properties[block.id]}
                    </CardTitle>
                    <>
                      <Toggle
                        isFaved={isFaved}
                        autoId={autoid}
                        onToggle={setFav}
                        type="detail"
                      />
                    </>
                  </>
                );
              case "description":
                return (
                  <CardDescription
                    key={`card-desc-key-${i}`}
                    label={block.label}
                    content={properties[block.id]}
                  />
                );
              case "openingHours":
                return (
                  <CardOpeningHours
                    key={`card-desc-key-${i}`}
                    label={block.label}
                    content={properties[block.id]}
                  />
                );
              case "link":
                return (
                  <CardLink
                    ismail="true"
                    key={`card-link-key-${i}`}
                    label={block.label}
                    content={properties[block.id]}
                    url={properties[block.id]}
                  />
                );
              case "tags":
                return (
                  <CardTags
                    ismail="true"
                    key={`card-link-key-${i}`}
                    label={block.label}
                    tags={properties[block.id]}
                  />
                );
              default:
                return null;
            }
          })}
        </>
      )}
    </>
  );
};
