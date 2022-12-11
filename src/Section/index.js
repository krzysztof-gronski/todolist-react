import {SectionElement, SectionBody} from "./styled";

const Section = ({ header, body }) => (
    <SectionElement>
        {header}
        <SectionBody>
            {body}
        </SectionBody>
    </SectionElement>
);

export default Section;