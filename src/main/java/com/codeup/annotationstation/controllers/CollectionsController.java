package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.daos.CollectionsRepository;
import com.codeup.annotationstation.daos.UsersRepository;
import com.codeup.annotationstation.Models.Collection;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class CollectionsController {
    //field to inject repository
    private UsersRepository usersDao;
    private CollectionsRepository collectionsDao;

    public CollectionsController(UsersRepository usersDao, CollectionsRepository collectionsDao) {
        this.usersDao = usersDao;
        this.collectionsDao = collectionsDao;
    }
//@GetMapping("/index")
//public String showIndex(){
//        return "index";
//}
    @GetMapping(value = "/collection")
    public String indexPage(Model model, Collection collection) {
        model.addAttribute("collection", collectionsDao.findAll());
//        model.addAttribute("similarTitle", collectionsDao.findFirst10ByTitleOrderByTitleDesc(collection.getTitle()));

        return "collection/index";
    }

    //show all collections
    @GetMapping("/collections")
    public String showCollectionsPage(Model model){
        model.addAttribute("collections", collectionsDao.findAll());
        return "collectionPage";
    }

//show one collection
    @GetMapping("/collections/{id}")
    public String oneCollection(@PathVariable long id, Model model){
        model.addAttribute("singleCollection", collectionsDao.getById(id));
        return "collections/show";
    }

//get a collection to edit
    @GetMapping("/collections/edit/{id}")
    public String editCollection(@PathVariable long id, Model model){
        //find collection to edit
        Collection collectionToEdit = collectionsDao.getById(id);
        return "collection/edit";
    }
//save a edited collection
    @PostMapping(value = "/collections/edit/{id}")
    public String saveEditedCollection(@PathVariable long id, @ModelAttribute Collection collection){
        //save changes made to collection
        collection.setUser(usersDao.getById(id));//update collection at the id of ?
        collectionsDao.save(collection);
        return "redirect:/collections/{id}";
    }
//get information about collections from form to add
    @GetMapping(value= "/collection/add")
    public String addCollection(@RequestParam(name= "addCollection") String title,@RequestParam String description, @RequestParam boolean isPrivate, @RequestParam String image ){
        Collection collection = new Collection(title, description, isPrivate, image);
        collectionsDao.save(collection);
        return "redirect:/collection";
    }

    //get form to create new collection
    @GetMapping(value="/collection/create")
    public String getCreateCollection(Model model){
        model.addAttribute("addcollection", new Collection());
        return "/create";
    }
//save created collection
    @PostMapping(value="collection/create")
    public String createNewCollection(@ModelAttribute Collection collection){
        collection.setUser(usersDao.getById(collection.getId()));
        Collection saveCollection = collectionsDao.save(collection);
        return "redirect:/collection"+ saveCollection.getId();
    }
//destroy a collection
    @PostMapping("/collections/{id}/delete")
    public String delete(@PathVariable long id){
        collectionsDao.deleteById(id);
        return "redirect:/collections";
    }


}
