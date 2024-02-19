"use client";
import * as Accordion from "@radix-ui/react-accordion";
import PlusIcon from "../../public/assets/Plus.svg";
import Image from "next/image";
import Minus from "../../public/assets/Minus.svg";
import { useState } from "react";
const items = [
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
];
const Faq = () => {
  const [value, setValue] = useState("item-1");

  const handleTrigger = (item: any) => {
    const itemVal = `item-${item}`;
    if (itemVal === value) {
      setValue("");
    } else {
      setValue(itemVal);
    }
  };

  return (
    <div className="px-5 lg:px-0 lg:container pt-14 sm:pt-32" id="faq">
      <div className="flex flex-col lg:flex-row lg:gap-x-6">
        <div className="lg:w-1/3">
          <p className="text-[#EB2891] font-medium text-[14px] lg:text[16px] my-4">
            Frequently Asked Questions
          </p>
          <h1 className="text-medium text-info text-[24px] lg:text-[42px] mb-4">
            Let’s clarify some of your questions
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#36485C] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
        </div>
        <div className="lg:w-2/3">
          <Accordion.Root
            collapsible
            defaultValue="item-1"
            type="single"
            className="flex flex-col gap-y-4"
          >
            {items?.map((item, index) => (
              <div key={index} className="bg-[#E3F1FF] p-4">
                <Accordion.Item value={`item-${index + 1}`}>
                  <Accordion.Header onClick={() => handleTrigger(index + 1)}>
                    <Accordion.Trigger className="flex justify-between w-full items-center font-medium text-[16px] lg:text-[18px]">
                      <p className="text-left">{item.question}</p>
                      <span className="font-medium">
                        <Image
                          className="h-6 w-6"
                          src={value === `item-${index + 1}` ? Minus : PlusIcon}
                          alt="puls icon"
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <p className="mt-2 text-[16px] lg:text-[18px] text-[#36485C]">
                      {item.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </div>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
};

export default Faq;
