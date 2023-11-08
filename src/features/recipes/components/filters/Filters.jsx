import PropTypes from "prop-types";
import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BiCheck } from "react-icons/bi";
import { HiChevronUpDown } from "react-icons/hi2";

export const Filters = ({ tagsCollection }) => {
  return (
    <div className="inset-0 flex items-center justify-center">
      <div className="flex flex-wrap">
        {Object.entries(tagsCollection).map(([tagType, tags]) => (
          <div key={tagType}>
            <h3>{tagType}</h3>
            <ListSelector tags={tags} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ListSelector = ({ tags }) => {
  const [selectedTag, setSelectedTag] = useState(tags[0]);
  return (
    <Listbox value={selectedTag} onChange={setSelectedTag}>
      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md curser-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
        <span className="block truncate">{selectedTag.DisplayName}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <HiChevronUpDown
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </Listbox.Button>
      <Transition
        as={React.Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg outline-none max-h-60 ring-1 ring-black/5 focus: sm:text-sm">
          {tags.map((tag) => (
            <Listbox.Option
              key={tag.id}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                }`
              }
              value={tag.displayName}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    {`${tag.displayName} - ${tag.count}`}{" "}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <BiCheck className="w-5 h-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

Filters.propTypes = {
  tagsCollection: PropTypes.arrayOf(PropTypes.object),
};

ListSelector.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object),
};
