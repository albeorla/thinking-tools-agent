#!/bin/bash

bun run bin/errors/convert_errors.ts < bin/errors/errors_input.json > docs/errors/errors.json
