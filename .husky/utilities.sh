#!/usr/bin/env bash

# Husky utility functions

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Timer
START_TIME=""

# Check if running in CI environment
is_ci() {
  [ -n "$CI" ] || [ -n "$CONTINUOUS_INTEGRATION" ]
}

# Print colored header
print_header() {
  echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${BLUE}$1${NC}"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
}

# Print info message
print_info() {
  echo -e "${BLUE}ℹ${NC} $1"
}

# Print success message
print_success() {
  echo -e "\n${GREEN}✓${NC} $1\n"
}

# Print error message
print_error() {
  echo -e "\n${RED}✗${NC} $1\n"
}

# Print warning message
print_warning() {
  echo -e "\n${YELLOW}⚠${NC} $1\n"
}

# Start timer
start_timer() {
  START_TIME=$(date +%s)
}

# End timer and print elapsed time
end_timer() {
  if [ -n "$START_TIME" ]; then
    local end_time=$(date +%s)
    local elapsed=$((end_time - START_TIME))
    echo -e "\n${BLUE}Time elapsed:${NC} ${elapsed}s"
  fi
}

# Skip hook with message
skip_hook() {
  print_warning "$1"
  exit 0
}

# Exit with error message
exit_with_error() {
  print_error "$1"
  if [ -n "$2" ]; then
    echo -e "${YELLOW}$2${NC}\n"
  fi
  exit 1
}
