import PropTypes from "prop-types";
import { useState, useEffect, useMemo, useCallback } from "react";
import { RecipeCard } from "../recipe-card";
import { FetchRecipes } from "../../api";
import { Listbox } from "@headlessui/react";
import { useNavigate, useLocation } from "react-router-dom";

import { LoadingState } from "@/features/ui";

import { Navigate } from "react-router-dom";

export const RecipeList = ({ searchTerm }) => {
  const { data: recipes, isLoading, isError, error } = FetchRecipes(searchTerm);
  const [tagsCollection, setTagsCollection] = useState({});
  const [selectedTag, setSelectedTag] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const findTagById = (tagsCollection, tagId) => {
    const tag = Object.values(tagsCollection)
      .flatMap(Object.values)
      .find((tag) => tag.id === tagId);
    return tag || null;
  };

  const getTagFromUrl = useCallback(() => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("tag");
  }, [location.search]);

  useEffect(() => {
    const tagIdFromUrl = getTagFromUrl();
    if (tagIdFromUrl) {
      const tag = findTagById(tagsCollection, tagIdFromUrl);

      setSelectedTag(tag);
    } else {
      setSelectedTag(null);
    }
  }, [getTagFromUrl, tagsCollection]);

  // Effect to update URL when selectedTag changes
  useEffect(() => {
    if (selectedTag) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("tag", selectedTag.id);
      navigate({ search: searchParams.toString() }, { replace: true }); // Update the URL
    }
  }, [selectedTag, navigate, location.search]);

  useEffect(() => {
    if (recipes?.results) {
      const newTagsCollection = {};

      recipes.results.forEach((recipe) => {
        recipe.tags.forEach((tag) => {
          const tagType = tag.type;
          const tagName = tag.name;
          if (!newTagsCollection[tagType]) {
            newTagsCollection[tagType] = {};
          }

          if (!newTagsCollection[tagType][tagName]) {
            newTagsCollection[tagType][tagName] = {
              count: 1,
              id: tag.id,
              name: tag.name,
              displayName: tag.display_name,
            };
          } else {
            newTagsCollection[tagType][tagName].count += 1;
          }
        });
      });
      setTagsCollection(newTagsCollection);
    }
  }, [recipes]);

  const filteredRecipes = selectedTag
    ? recipes.results.filter((recipe) =>
        recipe.tags.some((tag) => tag.id === selectedTag.id),
      )
    : recipes?.results;
  console.log({ filteredRecipes });
  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (
    !recipes ||
    !Array.isArray(recipes.results) ||
    recipes.results.length === 0
  ) {
    console.log(!recipes);
    console.log(!Array.isArray(recipes.results));
    console.log(recipes.results.length === 0);
    return <Navigate to="no-found-page" />;
  }

  return (
    <>
      <TagsList
        tagsCollection={tagsCollection}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <div className="grid justify-center grid-cols-1 mx-auto mt-5 mb-10 gap-x-10 gap-y-12 justify-items-center md:grid-cols-2 w-fit auto-rows-fr lg:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </>
  );
};

const TagsList = ({ tagsCollection, selectedTag, setSelectedTag }) => {
  const allTags = useMemo(
    () =>
      Object.entries(tagsCollection).flatMap((tags) =>
        Object.entries(tags).map(([name, tagData]) => ({
          id: tagData.id,
          name: name,
          displayName: tagData.displayName,
          count: tagData.count,
        })),
      ),
    [tagsCollection],
  );
  return (
    <Listbox value={selectedTag} onChange={setSelectedTag}>
      {({ open }) => (
        <>
          <Listbox.Button>{"+ refine"}</Listbox.Button>
          {open && (
            <Listbox.Options className="flex flex-wrap">
              {allTags.map((tag, index) => (
                <Listbox.Option key={`tag-${index}`} value={tag}>
                  {`${tag.displayName} (${tag.count})`}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          )}
        </>
      )}
    </Listbox>
  );
};

RecipeList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

TagsList.propTypes = {
  tagsCollection: PropTypes.arrayOf(PropTypes.Object.isRequired),
  selectedTag: PropTypes.arrayOf(PropTypes.Object.isRequired),
  setSelectedTag: PropTypes.func.isRequired,
};
