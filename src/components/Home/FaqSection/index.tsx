import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ArrowsUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/16/solid";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export const FaqSection = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32  lg:py-40">
        <div className="grid lg:grid-cols-[400px_auto] gap-16">
          <div>
            <h2 className="text-3xl tracking-tight text-gray-900 font-product font-bold">
              Encuentra respuestas a preguntas frecuentes
            </h2>
            <p className="text-gray-500 font-product mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              error, earum quis commodi cupiditate debitis harum reprehenderit.
            </p>
          </div>
          <div>
            <div className="flex justify-end">
              <button className="font-bold flex items-center justify-center gap-2 text-blue-500 font-product px-2 py-1 hover:bg-blue-100 bg-white rounded-full">
                <ArrowsUpDownIcon className="size-5 text-blue-500" />
                Expandir todos
              </button>
            </div>
            <div className="mx-auto divide-y divide-gray-900/10 w-full">
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq, idx) => (
                  <Disclosure as="div" key={idx} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <DisclosureButton className="flex w-full items-start justify-between text-left text-blue-500">
                            <span className="text-base font-bold leading-10 font-product ">
                              {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <ChevronUpIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" className="mt-2 pr-12">
                          <p className="text-base  text-gray-600 font-product">
                            {faq.answer}
                          </p>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
