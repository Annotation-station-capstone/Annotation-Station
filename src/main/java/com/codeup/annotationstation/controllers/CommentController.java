package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.Comment;
import com.codeup.annotationstation.Models.User;
import com.codeup.annotationstation.daos.CollectionsRepository;
import com.codeup.annotationstation.daos.CommentRepository;
import com.codeup.annotationstation.daos.UsersRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class CommentController {
    private CommentRepository commentDao;
    private UsersRepository userDao;
    private CollectionsRepository collectionDao;

    public CommentController(CommentRepository commentDao, UsersRepository userDao, CollectionsRepository collectionDao) {
        this.commentDao = commentDao;
        this.userDao = userDao;
        this.collectionDao = collectionDao;
    }

    //show all comments on a collection
    @GetMapping("/comment/all")
    public String showAllComments(Model model) {
        //find user of the comment
        model.addAttribute("allComments", commentDao.findAll());
        return "redirect:/comments/all";
    }

    @GetMapping("/comment/{id}/edit")
    public String getCommentToEdit(@PathVariable long id, Model model) {
        model.addAttribute("postToEdit", commentDao.getById(id));
        return "redirect:/comment/{id}/edit";
    }

    @PostMapping("/comment/{id}/edit")
    public String saveEditedComment(@PathVariable long id, @ModelAttribute Comment comment) {
        Comment commentToBeEdited = commentDao.getById(id);
        commentDao.save(commentToBeEdited);
        return "redirect:/collection";
    }

    @GetMapping("comment/{id}/delete")
    public String destroyComment(@PathVariable long id) {
        commentDao.deleteById(id);
        return "redirect:/collection";
    }

    @GetMapping("/comment/create")
    public String showCreateForm(Model model) {
        model.addAttribute("comment", new Comment());
        return "collectionsSingle";
    }

    @PostMapping("/comment/add")
    public String createComment(@RequestParam(name = "addComment") String addComment,
                                @ModelAttribute User user,
                                @ModelAttribute Comment comment,
                                @ModelAttribute Collection collection) {

        Collection currentCollection = collectionDao.getById(collection.getId());
//        User currentUser = userDao.getById(user.getId());
        Comment comment1 = new Comment(addComment);
//        comment.setUser(currentUser);
        commentDao.save(comment1);
        comment1.setCollection(currentCollection);

        return "redirect:/collectionsSingle";
    }
}







