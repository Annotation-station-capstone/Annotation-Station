package controllers;

import daos.CollectionsRepository;
import daos.UsersRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class CollectionsController {
    //field to inject repository
    private UsersRepository usersDao;
    private CollectionsRepository collectionsDao;


//show all collections
    @GetMapping("/collections")
    public String indexPage(Model model){
        model.addAttribute("collection", collectionsDao.findAll());
        return "collections/index";
    }
//show one collection
    @GetMapping("/collections/{id}")
    public String oneCollection(@PathVariable long id, Model model){
        model.addAttribute("singleCollection", collectionsDao.getById(id));
        return "collections/show";
    }

    @GetMapping("collections/edit/{id}")
    public String editCollection(@PathVariable long id, Model model){

    }


}
