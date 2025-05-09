import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FnQsection() {
    return (
        <>
            <section className="py-16 px-4 md:px-24">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    Frequently Asked Questions
                </h2>

                {/* Description */}
                <p className="text-md md:text-xl text-center text-[#616161] font-semibold max-w-3xl mx-auto mb-8 md:mb-12">
                    You Ask, We Assume You’ll Want to Know
                </p>
                <div className=" flex justify-center w-full items-start ">
                    <Accordion className="w-full flex  flex-col gap-4" type="single" collapsible>
                        <AccordionItem className=" w-full border-[#BABABA] border-2 px-4 rounded-lg" value="item-1">
                            <AccordionTrigger className="md:text-xl text-md w-full font-semibold">How does anonymous video chat work?</AccordionTrigger>
                            <AccordionContent className="text-sm md:text-lg">
                                Our platform uses advanced matching algorithms to connect you with random students while maintaining complete anonymity. You can chat via video while your identity remains protected until you choose to reveal it.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="border-2 w-full border-[#BABABA] px-4 rounded-lg" value="item-2">
                             <AccordionTrigger className="md:text-xl text-md w-full font-semibold">How do profile assumptions work?</AccordionTrigger>
                           <AccordionContent className="text-sm md:text-lg">
                                Our platform uses advanced matching algorithms to connect you with random students while maintaining complete anonymity. You can chat via video while your identity remains protected until you choose to reveal it.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="border-2 w-full border-[#BABABA] px-4 rounded-lg" value="item-3">
                             <AccordionTrigger className="md:text-xl text-md w-full font-semibold">Is my privacy protected?</AccordionTrigger>
                           <AccordionContent className="text-sm md:text-lg">
                                Our platform uses advanced matching algorithms to connect you with random students while maintaining complete anonymity. You can chat via video while your identity remains protected until you choose to reveal it.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="border-2 w-full border-[#BABABA] px-4 rounded-lg" value="item-4">
                             <AccordionTrigger className="md:text-xl text-md w-full font-semibold">Can I control who writes assumptions about me?</AccordionTrigger>
                           <AccordionContent className="text-sm md:text-lg">
                                Our platform uses advanced matching algorithms to connect you with random students while maintaining complete anonymity. You can chat via video while your identity remains protected until you choose to reveal it.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="border-2 w-full border-[#BABABA] px-4 rounded-lg" value="item-5">
                             <AccordionTrigger className="md:text-xl text-md w-full font-semibold">How do I stay safe while video chatting?</AccordionTrigger>
                           <AccordionContent className="text-sm md:text-lg">
                                Our platform uses advanced matching algorithms to connect you with random students while maintaining complete anonymity. You can chat via video while your identity remains protected until you choose to reveal it.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>


        </>
    )
}