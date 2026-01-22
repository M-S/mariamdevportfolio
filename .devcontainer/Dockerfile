# Dev Container image for local sandbox development
FROM mcr.microsoft.com/devcontainers/javascript-node:0-18

# Set workdir (devcontainers base image uses /workspaces by default)
WORKDIR /workspaces/mariamdevportfolio

# Ensure node user owns workspace
RUN sudo chown -R node:node /workspaces

# Install any extra useful tools
RUN sudo apt-get update \
    && sudo apt-get install -y --no-install-recommends git ca-certificates \
    && sudo rm -rf /var/lib/apt/lists/*

# Use non-root user provided by base image
USER node

# Default command will be provided by devcontainer.json
EXPOSE 5173 4173
