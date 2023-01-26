import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  // 리액트쿼리 추가 사용하여, 해당 페이지에 queryClient를 추가하였습니다.
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
