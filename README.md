nglview
=======

For testing only.

Installation
------------

To install use pip:

    $ pip install nglview
    $ jupyter nbextension enable --py --sys-prefix nglview


For a development installation (requires npm),

    $ git clone https://github.com/nglview/nglview.git
    $ cd nglview
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --user nglview
    $ jupyter nbextension enable --py --user nglview
