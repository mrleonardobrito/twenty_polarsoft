import {
  type CodeExecutionResult,
  type CodeInterpreterDriver,
  type ExecutionContext,
  type InputFile,
  type StreamCallbacks,
} from './interfaces/code-interpreter-driver.interface';

export type DisabledDriverOptions = {
  reason?: string;
};

export class DisabledDriver implements CodeInterpreterDriver {
  constructor(private options: DisabledDriverOptions = {}) {}

  async execute(
    _code: string,
    _files?: InputFile[],
    _context?: ExecutionContext,
    _callbacks?: StreamCallbacks,
  ): Promise<CodeExecutionResult> {
    const reason =
      this.options.reason ??
      'Code interpreter is disabled. Set CODE_INTERPRETER_TYPE=E2B and provide E2B_API_KEY to enable sandboxed execution.';

    // We throw so callers that already do try/catch (like CodeInterpreterTool) can handle it cleanly.
    throw new Error(reason);
  }
}


