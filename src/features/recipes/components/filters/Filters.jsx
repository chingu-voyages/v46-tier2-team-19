import PropTypes from "prop-types";

export const Filters = ({ tagsCollection, onTagSelected, selectedTags }) => {
  const isTagSelected = (tag) => {
    return selectedTags.some((selectedTag) => selectedTag.id === tag.id);
  };

  return (
    <div className="flex flex-wrap items-start justify-around">
      {Object.entries(tagsCollection).map(([tagType, tags]) => (
        <div key={tagType}>
          <h5 className="capitalize">
            {tagType === "cooking_style" ? "Cooking Style" : tagType}
          </h5>
          <ul className="space-y-2">
            {tags.map((tag) => (
              <li key={tag.id}>
                <button
                  onClick={() => onTagSelected(tag)}
                  className={` transition ease-in-out border-[3px] rounded-full delay-150 px-4 text-sm cursor-pointer bg-tangerine-100 text-tangerine-800 hover:shadow-lg hover:scale-110 ${
                    isTagSelected(tag) ? "border-tangerine-400" : "border-white"
                  }`}
                >
                  {tag.display_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

Filters.propTypes = {
  tagsCollection: PropTypes.object,
  selectedTags: PropTypes.arrayOf(PropTypes.object),
  onTagSelected: PropTypes.func,
};
