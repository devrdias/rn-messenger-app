import { useState, useEffect, useRef } from 'react';

const useSearchHeader = () => {
  const { searchQuery, setSearchQuery } = useState();
  const { isFocused, setIsFocused } = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleOnChangeValue = fieldName => (text) => {
    setSearchQuery({ [fieldName]: text });
  };

  return {
    searchQuery,
    handleOnChangeValue,
    isFocused,
    handleOnFocus,
    handleOnBlur,
    inputRef,
  };
};
export default useSearchHeader;
