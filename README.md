Jodot-HTTP-Trigger
===========

[Jodot] is a long-running process that executes duties delegated to it. See
[Jodot] for more info.

This is a Jodot duty that creates a HTTP server that listens to duty trigger via
the following GET:
```
http://[server_url]/[duty_to_trigger]
```
How to use
==========

Add this duty to your duty list with the following parameters:
```
  {
    package: jodot-http-trigger,
    params: ["USERNAME", "PASSWORD"]
  }
```
Please see [adding duties] to learn more about how to add duty to a [Jodot] instance.

[Jodot]: <http://jodot.readthedocs.io>