package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.Comment;
import com.codeup.annotationstation.Models.User;
import com.codeup.annotationstation.daos.*;
import com.codeup.annotationstation.Models.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;


@Controller
public class CollectionsController {
    //field to inject repository
    private UsersRepository usersDao;
    private CollectionsRepository collectionsDao;
    private SectionRepository sectionsDao;
    private NoteRepository noteDao;
    private CommentRepository commentDao;

    public CollectionsController(UsersRepository usersDao, CollectionsRepository collectionsDao, SectionRepository sectionsDao, NoteRepository noteDao, CommentRepository commentDao) {
        this.usersDao = usersDao;
        this.collectionsDao = collectionsDao;
        this.sectionsDao = sectionsDao;
        this.noteDao = noteDao;
        this.commentDao = commentDao;
    }
//@GetMapping("collection/index")
//public String showIndex(){
//        return "collection/index";
//}

    @GetMapping(value = "/")
    public String indexPage(Model model) {

        model.addAttribute("collection", collectionsDao.findAll());
        model.addAttribute("user", new User());

        return "collection/index";
    }

    //show all collections
    @GetMapping("/collectionsPage")
    public String showCollectionsPage(Model model){
        model.addAttribute("collections", collectionsDao.findAll());
        return "collectionPage";
    }

    //show one collection
    @GetMapping("/collection/{id}")
    public String oneCollection(@PathVariable long id, Model model){
        model.addAttribute("singleCollection", collectionsDao.findFirstById(id));
        model.addAttribute("allSections", sectionsDao.findSectionsByCollectionId(id));
        model.addAttribute("allComments", commentDao.findCommentsByCollectionId(id));
        //     model.addAttribute("allNotes", noteDao.findNoteBySectionsId(id));
        return "collectionsSingle";
    }

   // edit button links to collection by Id
    @GetMapping("/collections/edit")
    public String editCollection(@RequestParam long id, Model model){
        //find collection to edit
        Collection collectionToEdit = collectionsDao.getById(id);
        model.addAttribute("collection", collectionToEdit);
        return "collection/edit";
    }

    //save a edited collection
    @PostMapping(value = "/collections/edit/{id}")
    public String saveEditedCollection(@PathVariable long id, @ModelAttribute Collection collection){
        //save changes made to collection
        //collection.setUser(usersDao.getById(id));//update collection at the id of ?
        collectionsDao.save(collection);
        return "profileFragment";
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
        return "create";
    }
    //save created collection
    @PostMapping(value="collection/create")
    public String createNewCollection(@ModelAttribute Collection collection){
        collection.setUser(usersDao.getById(collection.getId()));
        Collection saveCollection = collectionsDao.save(collection);
        return "redirect:/collection"+ saveCollection.getId();
    }

    //destroy a collection
    @PostMapping("/collections/delete")
    public String delete(@RequestParam long id){
        collectionsDao.deleteById(id);
        return "profileFragment";
    }

    //get form to create new collection


    @GetMapping(value="/collections/single")
    public String getCollectionsFragment(Model model,
                                         @RequestParam(name="collection_id") String collectionId ) {
        long collection_id = Long.parseLong(collectionId);
        List<Comment> comments = commentDao.findByCollection_Id(collection_id);
        model.addAttribute("comments", comments);

        model.addAttribute("newComment", new Comment());
        System.out.println("collection.getId() = " + collection_id);
       return "collectionsSingle";
    }

    //User page
    @GetMapping(path="/collections/profile")
    public String getCollectionsCard(Model model) {
       User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
       model.addAttribute("currentUserId",currentUser.getId());
        return "profileFragment";
    }

    //carousel test page
    @GetMapping(path="/collections/carousel")
    public String getCarouselCard(Model model) {
        return "partials/carousel2";
    }
}
