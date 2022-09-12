import { FC } from "react";
import "./Style.scss";

interface IProps {
  url: string;
  title: string;
  subTitle: string[];
}

export const Banner: FC<IProps> = (props: IProps) => {
  const { url, title, subTitle } = props;

  return (
    <section className="section homepage-hero">
      <div className="Grid">
        <div className="Grid__Cell 1/2--desk">
          <div className="homepage-hero-content">
            <div>
              <h1 className="Heading Text--highlight">{title}</h1>
              {subTitle.map((item: string, index: number) => (
                <p className="Text--subdued u-h3" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-hero-image">
        <img
          className="image"
          sizes="100vw"
          src={url}
          alt="India product imagery with mobile view"
        />
      </div>
    </section>
  );
};
