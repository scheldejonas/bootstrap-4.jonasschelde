# Bootstrap 4 - Frontend JavaScript

This website is displaying the use of:

- Only use of variables and mixins
- Sass-partials and @import
- 5 Bootstrap components
- 2 Sass-mixins
- 2 Sass-functions
- An aesthetically pleasing design on desktop and mobile

## Sites source code

```

/*--------------------------

 Full-Stack conference custom css

  --------------------------*/


// Overriding variables before importing from boostrap
$main: #FF7200;

$primay: $main;


// Import - bootstrap sass partials
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/root";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/images";
@import "~bootstrap/scss/code";
@import "~bootstrap/scss/grid";
//@import "~bootstrap/scss/tables";
@import "~bootstrap/scss/forms";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/transitions";
@import "~bootstrap/scss/dropdown";
@import "~bootstrap/scss/button-group";
@import "~bootstrap/scss/input-group";
@import "~bootstrap/scss/custom-forms";
@import "~bootstrap/scss/nav";
@import "~bootstrap/scss/navbar";
@import "~bootstrap/scss/card";
//@import "~bootstrap/scss/breadcrumb";
//@import "~bootstrap/scss/pagination";
@import "~bootstrap/scss/badge";
@import "~bootstrap/scss/jumbotron";
@import "~bootstrap/scss/alert";
//@import "~bootstrap/scss/progress";
//@import "~bootstrap/scss/media";
@import "~bootstrap/scss/list-group";
@import "~bootstrap/scss/close";
//@import "~bootstrap/scss/toasts";
@import "~bootstrap/scss/modal";
//@import "~bootstrap/scss/tooltip";
//@import "~bootstrap/scss/popover";
//@import "~bootstrap/scss/carousel";
//@import "~bootstrap/scss/spinners";
@import "~bootstrap/scss/utilities";
//@import "~bootstrap/scss/print";


// Customizing - with some base css
@mixin kronborg-background {
  background-image: url('/img/kronborg.jpg');
  background-size: cover;
}


// Customizing - with sass functions
@mixin featured {
  color: color("white");
  background-color: theme-color-level("dark", -7);
}

.navbar .navbar-brand {
  color: color('white');
  font-size: 1rem;
}


// Customizing - with sass mixins
.jumbotron {
  @include kronborg-background;
}

.featured-list-group-item {
  @include featured
}

```

---
