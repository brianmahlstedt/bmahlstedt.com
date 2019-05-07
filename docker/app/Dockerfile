FROM python:3

# The compose file mounts the vcs directory to /bmahlstedt (for persistence and to mirror
# the source on the host), but you must still copy it during build time (this Dockerfile).
# Then, go there and install the app package into the system environment (editably,
# intentionally pointing back to vcs for our source package only).
COPY . /bmahlstedt
WORKDIR /bmahlstedt
RUN pip install -e .
