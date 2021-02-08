# What is Angular?

This topic can help you understand Angular: what Angular is, what advantages it provides, and what you might expect as you start to build your applications.

Angular is a development platform, built on TypeScript, that includes: 

* A component-based framework for building scalable web applications
* A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more
* A suite of developer tools that to develop, build, test, and update your code

When you build applications with Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as easy as possible, so you can take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.

<div class="alert is-helpful">

See the <live-example name="what-is-angular"></live-example> for a working example containing the code snippets in this guide.

</div>

## Angular applications: The essentials

This section explains the core ideas behind Angular. Understanding these ideas can help you design and build your applications more effectively.

## Angular CLI

In addition to its first-party libraries, Angular also includes the Angular CLI. The Angular CLI makes a number of tasks easy. Here are some examples:

<table>
<tr>
<td>ng build</td>
<td>Compiles an Angular app into an output directory.</td>
</tr>
<tr>
<td>ng serve</td>
<td>Builds and serves your application, rebuilding on file changes</td>
</tr>
<tr>
<td>ng generate</td>
<td>Generates or modifies files based on a schematic.</td>
</tr>
<tr>
<td>ng test</td>
<td>Runs unit tests on a given project.</td>
</tr>
<tr>
<td>ng e2e</td>
<td>Builds and serves an Angular application, then runs end-to-end tests using Protractor.</td>
</tr>
</table>

You'll find the Angular CLI a valuable tool for building out your applications.

For more information about the Angular CLI, see the CLI Reference section.

### Components

Components are the building blocks that compose an application. A component is a class that includes a decorator, `@Component()`.  This decorator specifies the following additional information:

* A CSS selector that defines how the component is used in a template. HTML elements in your template that match this selector become instances of the component.
* An HTML template that instructs Angular how to render the component.
* An optional set of CSS styles that define the appearance of the template's HTML elements.

The following is a minimal Angular component.

<code-example
  path="what-is-angular/src/app/app.component.ts"
  region="import, component"></code-example>

To use this component, you write the following in a template:

<code-example
  path="what-is-angular/src/index.html"
  region="component"></code-example>

When Angular renders this component, the resulting DOM looks like this:

<code-example language="html">
&lt;hello-world&gt;
  &lt;h1&gt;Welcome friend&lt;/h1&gt;
  &lt;p&gt;This is my first component!&lt;/p&gt;
&lt;/hello-world&gt;
</code-example>

Angular's component model offers strong encapsulation and an intuitive application structure. Components also make your application easier to unit test and can improve the overall readability of your code.

For more information on what you can do with components, see the Components section.

Every component has an HTML template that declares how that component renders. You define this template either inline or by file path.

Angular extends HTML with additional syntax that lets you insert dynamic values from your component. Angular automatically updates the rendered DOM when your component’s state changes. One application of this feature is inserting dynamic text, as shown in the following example.

<code-example language="html">
&lt;p&gt;{{ message }}&lt;/p&gt;
</code-example>

The value for message comes from the component class:

<code-example language="javascript">
class SayHello() {
  message = "Hello, World!"
}
</code-example>

When the application loads the component and its template, the user sees the following:

<code-example language="html">
&lt;p&gt;Hello, World!&lt;/p&gt;
</code-example>

Notice the use of double curly braces--they instruct Angular to interpolate the contents within them.

Angular also supports property bindings, to help you set values for properties and attributes of HTML elements and pass values to your application's presentation logic.

<code-example language="html">
&lt;button [disabled]="hasChanges" [attr.aria-label]="Save profile"&gt;
</code-example>

Notice the use of the square brackets--that syntax indicates that you're binding the property or attribute to a value in the component class.

You can also declare event listeners to listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches. You declare an event listener by specifying the event name in parenthesis:

<code-example language="html">
&lt;button (click)="onEditClick()"&gt;
</code-example>

The preceding example calls a `saveChanges()` method, which is defined in the component class:

<code-example language="javascript">
class HelloWorld {
  onEditClick() {
    // Persist changes here
  }
}
</code-example>

The following is an example of interpolation and bindings within an Angular template:

<code-example language="javascript">

</code-example>

You can add additional functionality to your templates through the use of directives. The most popular directives in Angular are *ngIf and *ngFor. You can use directives to perform a variety of tasks, such as dynamically modifying the DOM structure. And you can also create your own custom directives to create great user experiences.

The following code is an example of the *ngIf directive.

<code-example language="javascript">

</code-example>

Angular's declarative templates allow you to cleanly separate your application's logic from its presentation. Templates are based on standard HTML, so they're easy to build, maintain, and update.

For more information on what you can do with templates, see the Templates section.

### Dependency injection

Dependency injection allows you to declare the dependencies of your components and business logic without taking care of their instantiation. Instead, Angular handles the instantiation for you. This design pattern allows you to write more testable and flexible code. Even though understanding dependency injection is not critical to start using Angular, we strongly recommend it as a best practice and many aspects of Angular take advantage of it to some degree.

To illustrate how dependency injection works, consider the following example. The first file, session-profile.ts, defines a `SessionProfile` class. This class contains a function that returns the first name of the user.

<code-example language="javascript">

</code-example>

Next, the `user-profile.component.ts` file defines an Angular component. This component uses a template to display the first name of the user. To get that name, the `SessionProfile` is injected into the `UserProfile` class by adding `private sessionProfile: SessionProfile` to the constructor.

<code-example language="javascript">

</code-example>

Last, the `user-profile.test.ts` file tests the `UserProfile` class. Because the `SessionProfile` class requires a `sessionStorage` object, you need another way to test that the class works as intended. To accomplish this, you configure the test to use the `FakeSessionProfile` class.

<code-example language="javascript">

</code-example>

As this example shows, dependency injection can help you write more testable and maintainable code.

For more information about dependency injection and its benefits, see the Dependency Injection section.

## First-party libraries

The previous section, Angular applications: The essentials, provides a brief overview of a couple of the key architectural elements you'll use when building Angular applications. But the many benefits of Angular really become apparent when your application grows and you want to add additional functions such as site navigation or user input. That's when you can leverage the Angular platform to incorporate one of the many first-party libraries that Angular provides.

Some of the libraries available to you include:

* Angular Router -  Advanced client-side navigation and routing based on Angular components. Supports lazy-loading, nested routes, custom path matching, and more.
* Angular Forms - Uniform system for form participation and validation.
* Angular HttpClient - Robust HTTP client that can power more advanced client-server communication.
* Angular Animations - Rich system for driving animations based on application state.
* Angular PWA - Tools for building Progressive Web Applications (PWAs) including a service worker and Web app manifest.
* Angular Schematics - Automated scaffolding, refactoring, and update tools that simplify development at large scale.

These libraries expand your application's functionality while also allowing you to focus more on the features that make your application unique. And you can add these libraries knowing that they're designed to integrate seamlessly into and update simultaneously with the Angular framework.

These libraries are only required if and when they can help you add functionality to your applications or solve a particular problem.

## Next steps

This topic is intended to give you a brief overview of what Angular is, the advantages it provides, and what you can expect as you start to build your applications.

To see Angular in action, see our Getting Started tutorial. This tutorial uses stackblitz.io, so you can explore a working example of Angular without any installation requirements.

To explore Angular's capabilities further, we recommend reading through the sections, Understanding Angular and Developer Guides.
