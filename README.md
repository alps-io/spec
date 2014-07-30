spec
====

ALPS Specification documents.

## Contributing
* Fork/branch master.
* Make your addition or bug fix to the the .xml version of the current draft
* Generate your .txt and .html files:

    _Option 1_
    * Using an [xml2rfc converter](/misc/rfc-notes.txt), generate the .txt and .html files. E.g., using [Python xml2rfc][]:
        ```
        $ xml2rfc draft-00.xml  --basename=draft-00  --text --html
        ```

        NOTE: There is currently a bug in the current version (1.4.5) of the [Python xml2rfc ][] library. This bug impacts
        the online generator at: http://xml.resource.org/

        You can work around this by using the [Python 1.4.5 xml2rfc library][] locally and making the patch discussed here:
        http://trac.tools.ietf.org/tools/xml2rfc/trac/ticket/239#comment:1

    * Copy the contents of draft-00.html to index.html.

    _Option 2_
    * If you have [Python xml2rfc][] installed:

        ```
        $ ./generate_rfc
        ```
* Open a pull request and include in the description:
    * The purpose of the changes.
    * Links to any related github issues or milestones the PR addresses.

[Python xml2rfc]: https://pypi.python.org/pypi/xml2rfc
