import React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const Blog = () => {
  return (
    <div className="container mx-auto">
      <h1>This is from blog</h1>
      <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    what is cors?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    “CORS” stands for Cross-Origin Resource Sharing. It allows one server  to make requests from one another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).By default for security reasons, browsers restrict cross-origin HTTP requests that initiated from scripts.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Why are you using firebase? What other options do you have to implement authentication?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    In this project we used firebase mainly for two reasons. These are authentication and hosting. Firebase are popular for authentication purposes. By using firebase, we easily implement email/password login as well as third party one-click login. Besides that, our project is hosted on the firebase. There are many firebase alternative we can use such as oauth, supabase, MongoDB etc
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How does the private route work?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Private route works very simply. If we set a route inside a private route then we try to access that route it will first go to that private route. In that private route there will be some condition depending on that it may go to that route or to a route that redirects from private route.  
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is Node? How does Node work?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    In one word, Node is JavaScript runtime that is built on Chrome’s V8 engine. We all know that JavaScript one works with-thin browser. But Rayn-dahl make it possible to run JavaScript outside the browser also. That’s why we don’t need separate language for server-side application. JavaScript is non-blocking I/O meaning that one request needn’t to wait for another one to complete first.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

    </div>
  );
};

export default Blog;
