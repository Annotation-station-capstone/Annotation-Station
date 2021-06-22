package controllers;

import daos.CollectionsRepository;
import daos.UsersRepository;
import models.Collection;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CollectionsController {
    //field to inject repository
    private UsersRepository usersDao;
    private CollectionsRepository collectionsDao;

    public CollectionsController(UsersRepository usersDao, CollectionsRepository collectionsDao) {
        this.usersDao = usersDao;
        this.collectionsDao = collectionsDao;
    }


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
        //find collection to edit
        Collection collectionToEdit = collectionsDao.getById(id);
        model.addAttribute("editCollection", collectionToEdit);
        return "collection/edit";
    }

    @PostMapping(value = "collections/edit/{id}")
    public String saveEditedCollection(@PathVariable id, @ModelAttribute Collection collection){
        //save changes
        collection.getUser(usersDao.getById(id));
    }



}
