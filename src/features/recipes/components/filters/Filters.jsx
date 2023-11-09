import PropTypes from "prop-types";
import { Heading } from "@/features/ui";
export const Filters = ({ tagsCollection, onTagSelected, selectedTags }) => {
  const isTagSelected = (tag) => {
    return selectedTags.some((selectedTag) => selectedTag.id === tag.id);
  };

  return (
    <div className="flex flex-wrap items-start justify-around">
      {Object.entries(tagsCollection).map(([tagType, tags]) => (
        <div key={tagType}>
          <Heading level="h5" variant="tangerine" className="capitalize">
            {tagType === "cooking_style" ? "Cooking Style" : tagType}
          </Heading>

          <ul className="space-y-1">
            {tags.map((tag) => (
              <li key={tag.id}>
                <button
                  onClick={() => onTagSelected(tag)}
                  className={`border-2 rounded-full px-4 text-sm cursor-pointer ${
                    isTagSelected(tag)
                      ? "bg-gradient-tangerine-diagonal text-white"
                      : "text-tangerine-600  border-tangerine-600"
                  }  `}
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
