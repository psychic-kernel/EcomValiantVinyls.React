import {useState} from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from "reactstrap";

const GuideList = () => {
    const [open, setOpen] = useState("");
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }

    };

    return (
        <div>
            <Accordion flush open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Introduction</AccordionHeader>
                    <AccordionBody accordionId="1">
                        Do sit velit consequat veniam duis consequat minim id consectetur culpa tempor laborum. Enim esse do laborum cupidatat est tempor aliqua. Deserunt eu veniam dolor ex minim exercitation exercitation ullamco excepteur adipisicing laborum minim minim ad. Adipisicing labore eiusmod adipisicing esse. Ex cillum tempor ex ullamco aliquip laborum et minim eiusmod.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">Superior Sound</AccordionHeader>
                    <AccordionBody accordionId="2">
                            Do sit velit consequat veniam duis consequat minim id consectetur culpa tempor laborum. Enim esse do laborum cupidatat est tempor aliqua. Deserunt eu veniam dolor ex minim exercitation exercitation ullamco excepteur adipisicing laborum minim minim ad. Adipisicing labore eiusmod adipisicing esse. Ex cillum tempor ex ullamco aliquip laborum et minim eiusmod.
                        </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">Vinyl History</AccordionHeader>
                    <AccordionBody accordionId="3">
                            Do sit velit consequat veniam duis consequat minim id consectetur culpa tempor laborum. Enim esse do laborum cupidatat est tempor aliqua. <br/>
                            Deserunt eu veniam dolor ex minim exercitation exercitation ullamco excepteur adipisicing laborum minim minim ad. Adipisicing labore eiusmod adipisicing esse. Ex cillum tempor ex ullamco aliquip laborum et minim eiusmod.
                        </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="4">Vinyl Records Comeback</AccordionHeader>
                    <AccordionBody accordionId="4">
                            Do sit velit consequat veniam duis consequat minim id consectetur culpa tempor laborum. Enim esse do laborum cupidatat est tempor aliqua. Deserunt eu veniam dolor ex minim exercitation exercitation ullamco excepteur adipisicing laborum minim minim ad. <br />
                            
                            Adipisicing labore eiusmod adipisicing esse. Ex cillum tempor ex ullamco aliquip laborum et minim eiusmod.
                        </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="5">Start Your Record Collection</AccordionHeader>
                    <AccordionBody accordionId="5">
                            Do sit velit consequat veniam duis consequat minim id consectetur culpa tempor laborum. Enim esse do laborum cupidatat est tempor aliqua. Deserunt eu veniam dolor ex minim exercitation exercitation ullamco excepteur adipisicing laborum minim minim ad. Adipisicing labore eiusmod adipisicing esse. Ex cillum tempor ex ullamco aliquip laborum et minim eiusmod.<br/>

                            laborum cupidatat est tempor aliqua. Deserunt eu veniam dolor ex minim exercitation exercitation ullamco excepteur adipisicing laborum minim minim ad.
                        </AccordionBody>
                </AccordionItem>
            </Accordion>

        </div>
    )
}; export default GuideList;