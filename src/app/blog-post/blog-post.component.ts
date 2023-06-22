import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostsComponent {
  blogPosts: any[] = [
    { title: 'Blog Post 1', content: 'Content 1' },

  ];

  applyToPost(post: any) {
    // Logic for applying to the blog post goes here
    // You can access the selected post and perform necessary actions
  }

  checkFormationProgress() {
    // Logic for checking formation progress
    // Implement your functionality here
  }

  requestDocuments() {
    // Logic for requesting documents
    // Implement your functionality here
  }

  planAppointments() {
    // Logic for planning appointments
    // Implement your functionality here
  }
}
