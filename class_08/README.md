`![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Responsive Basics

##Agenda

* Review - Relaxr Blog & Startup Martchmaker (next time)
* Positioning

##Review - Startup Martchmaker

[Startup Matchmaker](../Week_03_Layout/Assignments/startup_matchmaker/solution/)

##Positioning

Up until now, we have only laid out items in our page using two types of positioning: _Normal Flow_ and _Float_. But there are three more positioning options as well.

* Normal Flow
    * Every block element is on a new line.
    * Even if two block elements can fit side-by-side on the page, they will not appear next to each other.
    * This is the default, so you will rarely see the position syntax below.
    * CSS Example
      ```
        p {
          position: static;
        }
      ```

* Relative Positioning
    * Moves an element from the position it would normally be in, shifting it up, down, right or left.
    * Does not affect the position of surrounding elements - they pretend the element is where it would be in Normal Flow.
    * CSS Example
      ```
        h1 {
          position: relative;
          top: 100px;
          right: 50px;
        }
      ```
* Absolute Positioning
    * Positions the element in relation to its containing parent element. Move it up, down, right or left.
    * It is taken our of normal flow. Surrounding elements move as though it isn't there.
    * CSS Example
      ```
        img {
          position: absolute;
          bottom: 20px;
          left: 500px;
        }
      ```
* Fixed Positioning
    * Positions the element in relation to the browser window. Move it up, down, right or left.
    * The element will not move as the user scrolls, but rather stays fixed in the window.
    * It is taken our of normal flow. Surrounding elements move as though it isn't there.
    * CSS Example
      ```
        header {
          position: fixed;
          top: 0px;
          left: 0px;
          padding: 10px;
          margin: 0px;
          width: 100%;
          background-color: #efefef;
        }
      ```
* Float
    * Remove element from Normal Flow and position it at the far left or right of it's parent.
    * Floated element becomes a block element. Other content flows around it.
    * Use clear with floats to start a new line below.
    * Don't forget to use `overflow` in order to fix the parent's of floatined elements.
    * CSS Example
      ```
        h1 {
          float: left;
        }
      ```

##Positioning Lab

* Position some items on the screen.
* Use z-index to change the stacking order.
* Setup a stickey header
* Convert Startup Matchmaker to use position relative instead of float.

##Images

* Sizes
    * You can specify image width or height in HTML or CSS.
    * Always best to give `img` tags a width and height. The browser will render the page faster if it knows the size of the image before downloading it. Otherwise, your browser has to wait until the image is downloaded to know how much room it is gonna take up in the page.

* Background Images
    * When you want to apply an image as the background of an element, do this:
      ```
        background-image: url("images/cool.png");
      ```
    * By default, the image will repeat to fill the parent.
    * Use background-repeat to change how the image repeats.
      ```
        background-repeat: repeat;
      ```
      * repeat - repeat horizontally and veritically
      * repeat-x - repeat horizontally only
      * repeat-y - repeat vertically only
      * no-repeat - image is only shown once
    * Use background-position to define where the background image should be placed in the browser window if it isn't repeated.
      * Takes two values, each of which can be any of these positions: left, top, center, right, or bottom
      * The first value is horizontally, the second is vertically
      ```
        background-position: top left;
      ```
    * Use background-size to specific the size of the image.
      * `cover` scales the background image to be as large as possible so that the background area is completely covered by the background image. Some parts might be cut off.
      * `contain` scales the image to the largest size that still fits the whole image.
      ```
        background-size: cover;
      ```

##Images Lab

* Change the image properties in Startup Matchmaker
* Add a pattern to another part of the page.

##Responsive Lab & Homework

* Setup Relaxr with Media Queries
* Setup Startup Matchmaker with Media Queries
