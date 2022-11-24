import "./style.css";

const Section = ({header, body}) => (
    <section className="section">
             {header}
             <div className="section__body">
             {body} 
             </div>
                   
            
    </section>    
);


export default Section;