# Adriano Belisario's website

Based on Ella Kaye's tempalte (<https://ellakaye.co.uk>) and built with [Quarto](https://quarto.org).

```
install.packages(c("renv","yaml"))
renv::init()
```

## Installation

1. Install Quarto

If you haven't installed Quarto, download and install it from Quarto's official site.

2. Set Up R and Dependencies (If Using R)

This project includes R-related files (.Rproj, renv), so you may need to install dependencies.

Open R and run:

install.packages("renv")
renv::restore()

## Running the Site Locally

1. Serve the Site

To preview the site locally, run the following command in the project directory:

``quarto preview``

This will:

Render the Quarto site

Launch a local web server

Watch for changes and automatically refresh

2. Render the Site Without Live Preview

If you want to build the site without starting a local server:

``quarto render``

This will generate the output inside the docs/ folder.

Accessing the Site

Once the site is served, open the displayed localhost URL (typically http://localhost:4200).