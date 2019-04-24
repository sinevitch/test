import { useEffect, useState } from 'react';

export const HomeScreenHook = (onGetAllNews, allNews, setNews, navigation) => {
  const [refreshing, setRefreshing] = useState(false);
  const handlerRefresh = async () => {
    setRefreshing(true);
    onGetAllNews()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };
  const handlerClick = (news) => {
    setNews(news);
    navigation.navigate('Details');
  };
  useEffect(
    () => {
      if (!allNews) {
        onGetAllNews();
      }
    },
    [],
  );
  return { refreshing, handlerRefresh, handlerClick };
};
