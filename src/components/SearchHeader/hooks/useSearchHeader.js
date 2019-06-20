import { useEffect, useRef, useState } from 'react';
import NavigationService from '../../../services/NavigationService';

const useSearchHeader = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [isFocused, setIsFocused] = useState(false);
  const inputEl = useRef(null);

  useEffect(() => {
    if (isFocused) {
      if (inputEl.current) {
        inputEl.current.focus();
      }
    }
  }, [isFocused]);

  const handleOnFocus = () => {
    setIsFocused(true);

    NavigationService.navigate('SearchScreen');
    setTimeout(() => {
      if (inputEl.current) {
        inputEl.current.focus();
      }
    }, 240);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleOnChangeValue = (text) => {
    setSearchQuery(text);
  };

  const handleOnPress = () => {
    if (isFocused) {
      setIsFocused(false);
      NavigationService.goBack();
    } else {
      handleOnFocus();
    }
  };

  const handleOnSearch = () => {
    console.log('handleOnSearch');
  };

  return {
    searchQuery,
    handleOnChangeValue,
    isFocused,
    handleOnFocus,
    handleOnBlur,
    handleOnPress,
    handleOnSearch,
    inputEl,
  };
};

export default useSearchHeader;
