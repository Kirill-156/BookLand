import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./pages/MainLayot";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { FavoritePage } from "./pages/FavoritePage";
import { ProfilePage } from "./pages/ProfilePage";
import { BasketPage } from "./pages/BasketPage";
import { BookPage } from "./pages/BookPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClinet } from "./lib/queryClient";
import { BookProvider } from "./lib/BookContext";

export default function App() {
    return (
        <QueryClientProvider client={queryClinet}>
            <BookProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<MainLayout />}>
                            <Route path="/" element={<HomePage />}/>
                            <Route path="/catalog" element={<CatalogPage />}/>
                            <Route path="/favorite" element={<FavoritePage />}/>
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/basket" element={<BasketPage />} />
                            <Route path="/book/:id" element={<BookPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </BookProvider>
        </QueryClientProvider>
    )
}