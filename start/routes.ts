import Route from "@ioc:Adonis/Core/Route";

Route.get("/calculateAverage", "AverageController.calculateAverage").middleware("validation");
Route.get("/searchCEP/:cep", "SearchCEPController.searchCEP");
